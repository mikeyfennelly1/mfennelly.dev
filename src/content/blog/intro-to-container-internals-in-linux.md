---
title: "Intro to Container internals in Linux"
date: "October 14, 2025"
author: "Mikey Fennelly"
description: "An introduction to the Linux Kernel technologies that are used in container engines and runtimes."
---

No matter what field of Software Engineering you work in, it's highly likely that you've heard of the buzz words "Containers" and "Cloud Native". I too had heard them a lot, so made it my mission to get down and dirty to understand the engineering behind these buzz words. In this article I am going to explore some of the topics that I picked up on my journey in learning about containers and cloud native. Hopefully, they can help some others demistify these buzz words too!

Grab your popcorn - and preferably some flavor of Linux too.

## "Containers are lightweight virtual machines"... or are they?

If you have explored this topic before, it is likely that you have encountered statements such as "containers are lightweight virtual machines". This isn't necessarily a bad mental model for containers, but it can be misleading. Containers are a form of virtualisation (specifically OS level virtualisation) and are a way to organise software components so that they can't see out of their little world. This mental model is a simple way of thinking about containers, but it isn't accurate. The most misleading suggestion of this statement is that containers are one single unit of something. Saying that a container is a lightweight VM is actually quite off the mark, because the truth is that a container doesn't have any weight (so it can't be considered "lightweight"), and a container isn't a virtual machine! So what is a container?

What we refer to as a container is actually a combination of different operating system features that come together to isolate a process running on an OS. That's a container is; an isolated process or a group of processes running on a host kernel. The exact implementation can vary from Linux, to Windows, to Solaris, to z/OS (and so on..), but the general concepts remain the same across the board.

## Dividing the container

As mentioned before, a container isn't one single indivisible and tangible unit. A container is rather a process or group of processes that is subject to a menu of different attributes at once. These attributes have a limiting effect on the process in the following ways:

1. What the process/processes can see (parts of the filesystem, other processes).
2. The resources available to that process (the devices they can access, memory/CPU/network usage etc.).
3. What the process/processes can do (what syscalls they can make).
4. What the process/processes has the potential of doing in the future (what capabilities their child processes can inherit).

Linux makes all of this possible through the following kernel features:

1. Namespaces - of which there are 7. These can be thought of as categorized silos, which define information the kernel will give a process about the wider system.
2. cgroups (control groups). These can be thought of as a whole cockpit of nobs and dials that can be used to granularly control the resources (of all kinds) that are available to processes in the cgroup.
3. Security features - such as linux capabilities, seccomp filters & linux security modules like SELinux (a quite advanced module, with high detail - usually on RHEL & related distros) and AppArmor (simpler in comparison to RHEL, more common on Debian related distros).
4. chroot jails
5. Special filesystem types - the most common being (OverlayFS, AUFS and FUSE).

These low level concepts underpin the large and complex world of cloud native tools, from Kubernetes to Docker and all of your favorite cloud services. They are continuations on these primitives.

## Creating a bite-size container - from scratch!

If you are running Linux (and have Golang installed), you can follow the Golang code below to create a dummy container using Linux namespaces and the chroot syscall.

```go
package main

import (
	"os"
	"os/exec"
	"syscall"
)

func main() {
	args := os.Args
	if len(args) < 2 {
		println("Usage: ./program [create|chroot]")
		return
	}

	switch args[1] {
	case "create":
		create()
	case "chroot":
		startContainer("~/rootfs")
	default:
		println("Unknown command:", args[1])
	}
}

func create() {
	println("Executing the create step")
	commandToReinvokeThisProcess := exec.Command("/proc/self/exe", "chroot")
	commandToReinvokeThisProcess.SysProcAttr = &syscall.SysProcAttr{
		Cloneflags: syscall.CLONE_NEWUTS |
			syscall.CLONE_NEWPID |
			syscall.CLONE_NEWNS |
			syscall.CLONE_NEWNET |
			syscall.CLONE_NEWIPC,
	}

	commandToReinvokeThisProcess.Stdin = os.Stdin
	commandToReinvokeThisProcess.Stdout = os.Stdout
	commandToReinvokeThisProcess.Stderr = os.Stderr

	commandToReinvokeThisProcess.Run()
}

func startContainer(rootDirName string) {
	// copying bash into our pseudo-container
	_ = os.Mkdir(rootDirName, 0755)

	syscall.Chroot(rootDirName)
	syscall.Chdir("/")
	syscall.Sethostname([]byte("dummy-container"))

	println("Now inside new root! Spawning bash...")

	cmd := exec.Command("/bin/sh")
	cmd.Stdin = os.Stdin
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	cmd.Run()
} 
```

1. **Download an Alpine filesystem:** Before you try running the program however, you must download a filesystem (I recommend a light form of alpine linux) which you can use to be the filesystem of your dummy container. You can download your filesystem from the Alpine downloads page: https://alpinelinux.org/downloads/
2. **Untar the download:** Move the contents (still in one containing directory named 'rootfs') to the ~ directory.
3. **Traverse to the directory:** Go to the directory where you put your Go code (in the main.go file).
4. **Start the mini container:** You can start the mini container with the command:

```bash
sudo go run main.go create
```
### Here is what you did:

1. **Re-invoked the program:** Created a new process by using the `exec` syscall on the current program's binary.
2. **Applied Namespace flags:** Implicitly (via the Go standard library) set the flags on that call to place the resulting process in new namespaces.
3. **Triggered the Container start:** Executed the syscall, reinvoking the command and directing control flow to the `startContainer` function.
4. **Changed Root Directory:** Executed the `chroot` syscall, changing the process's perception of the filesystem's root location.
5. **Navigated to New Root:** Moved into the new root directory.
6. **Started a Shell:** Executed a new shell within the container, spawning a new process that inherits namespaces from the parent process.
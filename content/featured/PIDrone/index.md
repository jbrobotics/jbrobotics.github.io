---
date: '6'
title: 'PID based Autonomous Drone'
cover: './drone.JPG'
github: 'https://github.com/jerriebright/ROS-BASED-AUTONOMOUS-DRONE-SIMULATION'
external: 'https://www.youtube.com/watch?v=Hrdhqe0wyS8'
tech:
  - Autonomous MAV
  - ROS
  - PID Controller
  - Python

showInProjects: true
---

Developed a ROSpy based control system for a quadcopter to transverse to a set of GPS setpoint autonomously. The Control System has two modules namely the Altitude controller and the position controller, Altitude controller stabilizes the drone at the zero error Roll, Yaw, Pitch angles using a PID based controller, the position controller takes in the target GPS coordinate has setpoint values and calculates the roll yaw pitch angles to successfully move to the setpoint coordinates. these controllers work in synchronization to autonomously fly the drone from one coordinate to another.
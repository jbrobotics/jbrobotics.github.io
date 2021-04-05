---
date: '8'
title: '3D Mapping of Mobile Robot'
cover: './rtabmap.jpg'
github: 'https://github.com/jerrie-bright/RTABMAP'
external: 'https://www.youtube.com/watch?v=CnMpqUv7ask'
tech:
  - RtabMap
  - SLAM
  - ROS
  - Mapping
  - Localization

showInProjects: true
---

Implemented 3D mapping using Kinect and RGB-D Camera sensors on ground vehicle. A ground robot was added with the necessary sensors mentioned above and implemented mapping it with an indoor environment. Real time appearance-based mapping (RTAB-Map) was used to make the 3D map launched in gazebo environment. Then, BUG-2 algorithm was used to move the robot in the environment, reading the sensor data and ultimaately mapping. And also RViz was used to visualize the 2D ma, created using Rtab-map.
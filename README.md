# Face-Recognition Based Attendance System

## Team Details:
- Bharat Kaurav (220001017)
- Aditya Yadav (220001006)
- Arnav Nirmal Jain (220002018)
  
## Overview

This project is an attendance management system using the power of InsightFace for facial recognition. The app allows users to mark attendance by capturing and analyzing facial features.

## Features

- Facial recognition for attendance tracking
- User-friendly interface

## Prerequisites

Before you start, ensure you have the following installed:

- Python 3.x
- InsightFace library
- node.js
- React
- Microsoft C++ Build Tools

## Installation and Setup


1. Clone the repository:

   ```bash
   git clone https://github.com/Aviral-Sharma-2578/CS203-face-recognition.git

2. Install Dependencies

   ```bash
   # server dependencies
   cd server
   pip install -r requirements.txt

   # client dependencies
   cd ../client
   npm install

3. Run the application

   ```bash
   # server
   cd ../server
   uvicorn main:app --reload

   # client
   cd ../client
   npm start

## Description
1. This project takes a image of a group of people as input.
2. Does facial detection using insightface.
3. Uses insightface for face recognition.
4. Gives .csv and json file as output containing whether an individual is present or absent in that particular photo.

## Future Improvements

* Database Connection (preferably MongoDB)
* Execution time of the model

## Acknowledgements
* InsightFace developers and contributors.
* FastAPI, ReactJS, and TailwindCSS communities for their valuable tools and frameworks.

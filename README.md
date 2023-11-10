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

## Installation and Setup


1. Clone the repository:

   ```bash
   git clone https://github.com/arnavjain2710/Facial-Recognition-Project.git

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

## Acknowledgements
* InsightFace developers and contributors.
* FastAPI, ReactJS, and TailwindCSS communities for their valuable tools and frameworks.

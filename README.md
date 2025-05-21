# 🔍 Face Recognition App

## 🔄 Project Overview
This project is a **Face Recognition Application** designed to simplify employee and visitor authentication. The application leverages **AWS services** and python code for backend operations  and provides a responsive **React-based user interface** with both **light** and **dark modes**.

---

## 🌐 Features

### ✨ Core Functionalities
- **Employee Registration**:
  - Employee pictures are uploaded to an **S3 bucket**.
  - Details are stored in **DynamoDB**.
- **Visitor Authentication**:
  - Visitor pictures are uploaded to another **S3 bucket**.
  - The system uses **AWS Rekognition** to match visitors' faces with stored employee data.

### 🔧 Technical Highlights
- **AWS Services**:
  - Two S3 buckets: one for employee pictures and another for visitor pictures.
  - **Lambda** functions for registration and authentication.
  - **DynamoDB** for secure and scalable data storage.
  - **API Gateway** for GET and PUT requests.
  - **CloudWatch** for logging and monitoring.
- **React Frontend**:
  - Dark and Light themes for enhanced user experience.
  - UI for image uploads and authentication results.

---

## 🚀 Setup and Deployment

### 🌐 AWS Setup
1. **Create S3 Buckets**:
   - `employee-pictures-bucket`: Store employee images.
   - `visitor-pictures-bucket`: Store visitor images.
2. **Configure IAM Roles**:
   - Create a Lambda role with full access to **CloudWatch**, **DynamoDB**, **S3**, and **API Gateway**.
3. **Lambda Functions**:
   - **Employee Registration Function**: Upload images to S3 and store metadata in DynamoDB.
   - **Authentication Function**: Compare visitor images with employee data using AWS Rekognition.
4. **API Gateway**:
   - Set up endpoints for GET and PUT requests.

### 🌳 Frontend Setup
1. Use the React framework to build a user interface.
2. Implement dark and light themes using CSS or a theming library.
3. Add components for:
   - Employee registration.
   - Visitor authentication.
4. Configure API calls to Lambda functions for backend communication.

---

## 🖼 Screenshots

| **Feature**               | **Dark Theme**                                 | **Light Theme**                                |
|---------------------------|-----------------------------------------------|-----------------------------------------------|
| **Welcome Page**          | ![Screenshot (171)](https://github.com/user-attachments/assets/caf9bd9b-dc42-4134-9c67-67ebfa7064e2)| ![Screenshot (170)](https://github.com/user-attachments/assets/0ed9f4b9-ab2c-4931-be51-3f4aaa5cc2ad)|
| **Authentication Success**| ![authsuccess1](https://github.com/user-attachments/assets/d90132db-f24d-438c-949f-816d7e54c461)| ![authsuccess2](https://github.com/user-attachments/assets/53f52425-54c2-49fb-9692-a749fa77295e)|
| **Authentication Failed** |![Screenshot (167)](https://github.com/user-attachments/assets/49739a33-73fe-49e2-be30-6720977fe686)| ![Screenshot (165)](https://github.com/user-attachments/assets/0317bd73-73ac-4a9c-a489-e4b9ba8e352e)|

## 📊 Technologies Used

### AWS Services
- 🛂 S3
- 🔄 Lambda
- 🔐 DynamoDB
- 🏫 API Gateway
- 🎮 CloudWatch
- 👀 Rekognition

### Frontend
- 🔬 **React** (with Dark and Light modes)
- 🖌️ CSS for styling

### Backend
- 💻 **Python** for Lambda functions

---

## 🔒 How It Works
1. Employee images are uploaded to the S3 bucket and stored in DynamoDB.
2. Visitor images are uploaded and compared with employee data using AWS Rekognition.
3. The result (success or failure) is displayed on the frontend.

---

## ✨ Future Improvements
- Add multi-language support for the frontend.
- Enhance the authentication process with additional biometric features.
- Implement a real-time notification system for failed authentications.

---

## 📧 Contact
For any questions or suggestions, please reach out via email at [ritumishra1203@gmail.com].

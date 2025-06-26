# 🚧 Civix – Local Civic Issue Reporting App  

**Domain**: Governance / Public Welfare  
**Tagline**: Empowering citizens, enabling better governance.  

![Issues](https://img.shields.io/github/issues/Harshs16/civix)
![Forks](https://img.shields.io/github/forks/Harshs16/civix)
![Stars](https://img.shields.io/github/stars/Harshs16/civix)

## 🧠 Overview
  
**Civix** is a full-stack web application designed to streamline the process of reporting, tracking, and resolving local civic issues such as potholes, broken streetlights, and uncollected garbage. It provides a bridge between citizens and municipal authorities, bringing accountability and transparency to local issue resolution. 

![Image](https://github.com/user-attachments/assets/2640c43b-64b0-4fa1-afb4-ee2c5e7a5354)
*Caption: Citizen view showing issue reporting interface*

## 🚨 Problem Addressed  
Local civic issues often go unnoticed or unresolved due to:  
- Lack of structured, user-friendly reporting systems  
- No transparent status tracking  
- Difficulty in community prioritization  

## ✨ Features  

![Image](https://github.com/user-attachments/assets/b7f86a3e-3f51-4098-a5e7-eb14b134b111)
*Caption: Step-by-step issue reporting process*

### 🧍 Citizens  
- 📍 **Report Issues**: Submit problems with description, live location (via map), and image  
- 🔁 **Track Status**: View transitions from *Open → In Progress → Resolved*  
- 👍 **Upvote Issues**: Support others' reports to highlight common concerns  

### 🧑‍💼 Admins (City Workers)  
- 📊 **Dashboard**: View, filter, and manage all reported issues  
- 🔧 **Status Management**: Update progress and mark resolutions  
- 🔒 **Role-Based Access**: Secure login for Citizens and Admins  

## 🛠️ Tech Stack  
### Frontend  
- React.js  
- Tailwind CSS – Modern responsive UI  
- Leaflet.js – Interactive maps for location tagging  

### Backend  
- Node.js + Express.js  
- PostgreSQL – Relational DB for reports and user data  

### Integrations  
- Cloudinary – Image uploads and hosting  
- JWT Authentication – Secure role-based access  


## 🌗 Dark Mode Toggle  
**Implementation**:  
- `darkMode: 'class'` in `tailwind.config.js`  
- User preference saved via `localStorage`  
- Toggle switch: `src/ThemeToggle.jsx` (used in `Home.jsx`)  

**How to Use**:  
1. Locate the toggle button (🌙/☀️) in the header  
2. Click to switch between:  
   - **Light Mode**: White/light gray backgrounds (`bg-slate-50`) with dark text (`text-gray-900`)  
   - **Dark Mode**: Dark gray backgrounds (`dark:bg-gray-800`) with light text (`dark:text-gray-100`)  

## 🚀 Getting Started  

![Image](https://github.com/user-attachments/assets/2cd2d4e6-f9b4-4322-aad2-5475277ce2ff)
*Caption: Admin dashboard with issue management tools*

### Prerequisites  
- Node.js 16+  
- npm 8+  
- PostgreSQL 14+  
- Cloudinary account (for image uploads)  

### 📥 Installation  
📦 1.**Clone the repository**:  
   ```bash
   git clone https://github.com/Harshs16/civix.git
   cd Civix
  
📦 2. **Install Dependencies**

Make sure you have **Node.js** and **npm** installed.  
Then, install the project dependencies:

```bash

npm install

```



### 🌱 3. **Create a New Branch**
Use a meaningful branch name:
```bash

git checkout -b your-feature-name

```

Example:
```bash

git checkout -b improve-readme

```


 🛠️ 4. **Make Your Changes**
- Improve the code, fix bugs, or update docs.
- If you're running the project:
  ```bash

  npm start

  ```



 ✅ 5. **Stage and Commit**
```bash

git add .
git commit -m "feat: your clear and concise commit message"

```

🚀 6. **Push Your Branch**
```bash

git push origin your-feature-name

```

---

🔁 7. **Create a Pull Request**
- Go to your forked repo on GitHub
- Click **“Compare & pull request”**
- Add a helpful description of what you changed and why

---



## 📌 Roadmap / Future Enhancements  

- 🔔 Push notifications for issue updates  
- 📈 Analytics for civic issue trends  
- 🌐 Multilingual support  
- 📱 Mobile app (React Native) 

--- 

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss your ideas.

--- 

## 🌟 Our Awesome Contributors

<a href="https://github.com/Harshs16/civix/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Harshs16/civix" />
</a>

--- 

## 📄 License
MIT License. See LICENSE file for more details.


# Borderless BJJ Official Website

> A lightweight, zero-dependency commercial static website engineered for high performance, accessibility, and strict front-end security standards.

---
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=codeintern16&repo=borderlessbjjweb&layout=compact&theme=dark)](https://github.com/codeintern16/borderlessbjjweb)
## 🥋 Project Overview

**Borderless BJJ (無界柔術)** 官方形象網站。有別於普遍使用肥大 CMS 或現代重型前端框架的傳統做法，本專案堅持以**純原生技術棧（Vanilla Web Standards）**手刻實現，旨在提供毫秒級的載入速度、極致的手機端觸控體驗，以及企業級的客戶端資安防禦策略。

* **Live Demo**: [https://codeintern16.github.io/borderlessbjjweb/](https://codeintern16.github.io/borderlessbjjweb/)
* **Architecture**: Pure Static SPA/MPA Architecture (Zero external JS runtime dependencies)

---

## ⚡ Key Technical Highlights

### 1. Zero-Dependency & Extreme Performance
* **100% Vanilla Tech Stack**：全站無 Node.js 執行期負擔、無 jQuery 或笨重 UI 函式庫，靜態檔案直出。
* **Mobile-First Responsive Design (RWD)**：
  * 精準斷點控制，適配各尺寸行動裝置與桌機視窗。
  * 手刻柔術帶色（Belt Hierarchy）抽屜式導覽選單（Drawer Navigation），內建捲動穿透鎖定（Scroll Lock）機制。
* **Micro-interactions**：自研平滑滾動（Smooth Scroll）與視差細節，維持 60 FPS 流暢度。

### 2. Hardened Client-Side Security
* **Content Security Policy (CSP)**：全面收斂全站資源載入白名單，阻絕未授權的第三方腳本執行，有效防禦 Cross-Site Scripting (XSS) 與資料外洩風險。
* **MIME-Type Sniffing Protection & Sandboxing**：
  * 地圖與嵌入資源進行跨域隔離審查。
  * 外部 iframe 容器實施嚴格 sandbox 權限控制，防止 Clickjacking 點擊劫持攻擊。

### 3. Modular Clean Directory Architecture
代碼組織依據職責分離（Separation of Concerns）原則劃分，目錄層級簡潔俐落：

```text
borderlessbjjweb/
├── css/                  # 獨立樣式表（版面佈局、主題變數、微動畫）
│   └── index.css
├── html/                 # 子頁面模組（課程、師資、場館、交通指引）
├── image/                # 最佳化影像資源與社群向量 Icon
│   ├── mediaicon/
│   ├── slidewin/
│   └── logo1.png
├── javascript/           # 零相依獨立原生腳本
│   ├── hamburger.js      # 抽屜選單狀態機與觸控行為控制
│   └── rolltop.js        # 平滑捲動與視窗偵聽
├── index.html            # 形象入口首頁（包含 CSP 安全標頭宣告）
└── README.md

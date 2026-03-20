# 🎯 SWOT AI Tool - Quick Start (5 Minutes)

## Step 1: Set OpenAI API Key ⚙️

```bash
# Edit the .env file and add your OpenAI API key
nano .env
```

Replace:
```
OPENAI_API_KEY=your_api_key_here
```

With your actual key from: https://platform.openai.com/api-keys

Example:
```
OPENAI_API_KEY=sk-proj-abc123xyz...
```

## Step 2: Start Backend Server 🚀

```bash
# Terminal 1: Start the server
node server.js
```

Expected output:
```
✓ SWOT AI Tool server running at http://localhost:3000
✓ POST endpoint: http://localhost:3000/generate
```

## Step 3: Open the Tool 🌐

Open in your browser:
```
http://localhost:3000/swot-tool.html
```

## Step 4: Use the Tool 📝

1. **💪 Strengths**: e.g., "Strong team, Good market position"
2. **⚠️ Weaknesses**: e.g., "Limited budget, Small sales team"
3. **🚀 Opportunities**: e.g., "Growing market, New partnerships"
4. **🔴 Threats**: e.g., "Strong competition, Market changes"

Click **"✨ Generate Strategy"**

## Step 5: View Results 🎯

Watch as AI generates 3-5 actionable strategies!

---

## 🐛 Debugging

### Check Backend Logs (in Terminal 1)
```
Received SWOT input:
- Strengths: Strong team...
- Weaknesses: Limited budget...
Calling OpenAI API with gpt-4-mini model...
OpenAI response received successfully
```

### Check Frontend Logs (Press F12)
```
Sending SWOT data to backend...
Endpoint: http://localhost:3000/generate
Response status: 200
Response received: {...}
```

### Test Backend (Terminal 2)
```bash
./test-api.sh
```

---

## 📊 What's New?

| Feature | Details |
|---------|---------|
| **Backend Port** | Changed to 3000 |
| **API Endpoint** | `/generate` |
| **AI Model** | gpt-4-mini (optimized) |
| **UI Design** | Modern, professional |
| **Responsiveness** | Mobile-optimized |
| **Error Handling** | Comprehensive |
| **Logging** | Full debugging output |

---

## 🎨 UI Features

✨ **Modern Design**
- Gradient header with emoji
- Card-based layout
- Responsive 2x2 SWOT grid
- Color-coded sections (green, red, blue, orange)

💫 **Smooth Interactions**
- Loading spinner animation
- Slide-up output reveal
- Hover effects on button
- Focus states on inputs

📱 **Mobile-Friendly**
- Works on phones, tablets, desktops
- Touch-friendly buttons
- Responsive grid layout

---

## 📂 Important Files

```
swot-tool.html           # Main UI
swot-tool-modern.css     # Professional styling
script.js                # Frontend logic
server.js                # Backend API
.env                     # API configuration
test-api.sh              # Testing script
SWOT_SETUP.md            # Full setup guide
UPGRADE_SUMMARY.md       # Detailed changes
```

---

## ⚡ Example SWOT Input

**Strengths:**
- Experienced developer team
- Innovative AI solutions
- Growing customer base
- Strong brand reputation

**Weaknesses:**
- Limited marketing budget
- Small team size
- Lack of enterprise experience
- High technical debt

**Opportunities:**
- Rapid AI market growth
- Enterprise partnerships
- New market segments
- AI platform evolution

**Threats:**
- Intense competition from big tech
- Rapid technology changes
- Data privacy regulations
- Economic uncertainty

---

## 🆘 Troubleshooting

**Problem**: "Cannot connect to localhost:3000"
- **Solution**: Make sure `node server.js` is running

**Problem**: "Failed to generate strategy"
- **Solution**: Check your OpenAI API key in `.env`

**Problem**: "Invalid API key"
- **Solution**: Go to https://platform.openai.com/api-keys and create a new one

**Problem**: "All SWOT fields are required"
- **Solution**: Fill in all 4 input fields before submitting

---

## 📞 Need Help?

1. **Check the logs** (F12 in browser)
2. **Run the test script** (`./test-api.sh`)
3. **Read SWOT_SETUP.md** (full documentation)
4. **Check backend terminal** for error messages

---

## ✅ You're All Set!

Your SWOT AI Tool is:
- ✨ Modern and beautiful
- 🚀 Fast and responsive
- 🔧 Easy to debug
- 📚 Well documented
- 🎯 Production ready

**Happy strategizing! 🚀**
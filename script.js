// ==================== CART LOGIC ====================
        let cartCount = 0;
        const cartCountElement = document.getElementById('cart-count');

        function addToCart() {
            cartCount++;
            cartCountElement.innerText = cartCount;
            const toastEl = document.getElementById('cartToast');
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
        }

        // ==================== THEME TOGGLE ====================
        function toggleTheme() {
            const body = document.body;
            const themeIcon = document.getElementById('theme-icon');
            
            if (body.getAttribute('data-theme') === 'light') {
                body.setAttribute('data-theme', 'dark');
                themeIcon.className = 'fas fa-sun';
            } else {
                body.setAttribute('data-theme', 'light');
                themeIcon.className = 'fas fa-moon';
            }
        }

        // ==================== LOGIN PAGE ====================
        function openLogin() {
            document.getElementById('loginPage').style.display = 'flex';
        }

        function closeLogin() {
            document.getElementById('loginPage').style.display = 'none';
        }

        function handleLogin(event) {
            event.preventDefault();
            alert('Login successful! Welcome to NexusAI.');
            closeLogin();
        }

        // Close login page when clicking outside
        document.getElementById('loginPage').addEventListener('click', function(e) {
            if (e.target === this) {
                closeLogin();
            }
        });

        // ==================== MAP LOGIC ====================
        const map = L.map('map').setView([37.7749, -122.4194], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([37.7749, -122.4194]).addTo(map)
            .bindPopup('<b>NexusAI Store</b><br>123 Tech Avenue<br>Silicon Valley')
            .openPopup();

        // ==================== AI CHATBOT LOGIC ====================
        function toggleChatbot() {
            const chatbot = document.getElementById('chatbot');
            if (chatbot.style.display === 'flex') {
                chatbot.style.display = 'none';
            } else {
                chatbot.style.display = 'flex';
                setTimeout(() => {
                    document.getElementById('suggested-questions').style.display = 'block';
                }, 500);
            }
        }

        function handleKeyPress(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        }

        function sendMessage() {
            const inputField = document.getElementById('user-input');
            const message = inputField.value.trim();
            
            if (message) {
                addMessage(message, 'user');
                inputField.value = '';
                document.getElementById('suggested-questions').style.display = 'none';
                
                setTimeout(() => {
                    const aiResponse = generateAIResponse(message);
                    addMessage(aiResponse, 'bot');
                    setTimeout(() => {
                        document.getElementById('suggested-questions').style.display = 'block';
                    }, 500);
                }, 1000);
            }
        }

        function addMessage(text, sender) {
            const chatBody = document.getElementById('chat-body');
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');
            messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
            messageDiv.innerText = text;
            chatBody.appendChild(messageDiv);
            chatBody.scrollTop = chatBody.scrollHeight;
        }

        function quickAsk(question) {
            document.getElementById('user-input').value = question;
            sendMessage();
        }

        function generateAIResponse(userMessage) {
            userMessage = userMessage.toLowerCase();
            
            if (userMessage.includes('hello') || userMessage.includes('hi') || userMessage.includes('hey')) {
                return "Hello! 👋 How can I assist you today with your shopping?";
            } 
            else if (userMessage.includes('product') || userMessage.includes('what do you sell') || userMessage.includes('have')) {
                return "We sell AI-powered products! Currently available: Smart Headphones ($299), AI Smart Watch ($199), and AI Camera ($450). Which one interests you?";
            } 
            else if (userMessage.includes('price') || userMessage.includes('cost') || userMessage.includes('how much')) {
                return "Here are our prices:\n• Smart Headphones: $299\n• AI Smart Watch: $199\n• AI Camera: $450\n\nWould you like to order any?";
            } 
            else if (userMessage.includes('shipping') || userMessage.includes('delivery') || userMessage.includes('deliver')) {
                return "We offer FREE AI-powered fast shipping! 🚚 Your order will arrive in just 2-3 business days.";
            } 
            else if (userMessage.includes('location') || userMessage.includes('where') || userMessage.includes('address') || userMessage.includes('store')) {
                return "We are located at:\n📍 123 Tech Avenue, India Silicon Valley\n\nYou can find us on the map below!";
            } 
            else if (userMessage.includes('return') || userMessage.includes('refund') || userMessage.includes('exchange')) {
                return "We have a 30-day hassle-free return policy! If you're not satisfied, we'll refund your money no questions asked.";
            } 
            else if (userMessage.includes('track') || userMessage.includes('order status')) {
                return "To track your order, please visit our tracking page and enter your order number. You'll receive real-time updates via SMS!";
            } 
            else if (userMessage.includes('warranty') || userMessage.includes('guarantee')) {
                return "All our products come with a 1-year manufacturer warranty. Extended warranty options are also available!";
            } 
            else if (userMessage.includes('payment') || userMessage.includes('pay') || userMessage.includes('card')) {
                return "We accept all major payment methods: Visa, Mastercard, PayPal, and even Cryptocurrencies!";
            } 
            else if (userMessage.includes('contact') || userMessage.includes('phone') || userMessage.includes('email')) {
                return "You can reach us at:\n📞 +91 9024496436\n📧 rohitsinghraj7773@gmail.com\nWe're available Mon-Fri (9AM - 9PM)";
            } 
            else if (userMessage.includes('thank') || userMessage.includes('thanks')) {
                return "You're welcome! 😊 Is there anything else I can help you with?";
            } 
            else if (userMessage.includes('bye') || userMessage.includes('goodbye')) {
                return "Goodbye! 👋 Thank you for visiting NexusAI. Have a great day!";
            } 
            else {
                return "I'm still learning! 😅 Please ask about:\n• Products & Prices\n• Shipping info\n• Return policy\n• Our location\n• Payment methods";
            }
        }

        // ==================== AI SEARCH ====================
        function aiSearch() {
            const query = document.getElementById('ai-search-input').value;
            if (query) {
                alert(`AI is searching for: "${query}"\n\n(This would connect to a backend API in a real app)`);
            }
        }
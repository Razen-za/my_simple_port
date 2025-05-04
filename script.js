document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const notification = document.createElement('div');
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 30px;
            border: 3px solid #febed8;
            border-radius: 30px;
            box-shadow: 0 0 20px rgba(0,0,0,0.2);
            z-index: 1000;
            text-align: center;
            font-size: 18px;
        ">
            <p>Thank you, we will respond to your request soon.</p>
            <button style="
                background: #88c9f9;
                border: none;
                padding: 10px 25px;
                border-radius: 25px;
                margin-top: 15px;
                cursor: pointer;
                font-weight: bold;
            ">OK</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    notification.querySelector('button').addEventListener('click', function() {
        notification.remove();
    });
});
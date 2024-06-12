document.addEventListener('DOMContentLoaded', function () {
    // Sample data for demonstration
    const salesData = [10, 20, 30, 40, 50, 60, 70];
    const revenueData = [100, 200, 300, 400, 500, 600, 700];
    const totalSales = 1000;
    const totalTransactions = 50;
    const averageSale = totalSales / totalTransactions;
    const recentTransactions = [
        { date: '2024-06-01', productName: 'T-Shirt', quantity: 2, totalAmount: '$40.00' },
        { date: '2024-06-02', productName: 'Jeans', quantity: 1, totalAmount: '$50.00' },
    ];
    const lowStockAlerts = [
        { productName: 'Hoodie', stockLevel: 5 },
        { productName: 'Sneakers', stockLevel: 2 },
    ];

    // Update Key Metrics
    document.getElementById('totalSales').innerText = `$${totalSales.toFixed(2)}`;
    document.getElementById('totalTransactions').innerText = totalTransactions;
    document.getElementById('averageSale').innerText = `$${averageSale.toFixed(2)}`;

    // Update Recent Transactions List
    const recentTransactionsList = document.getElementById('recentTransactions');
    recentTransactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.productName}</td>
            <td>${transaction.quantity}</td>
            <td>${transaction.totalAmount}</td>
        `;
        recentTransactionsList.appendChild(row);
    });

    // Update Low Stock Alerts
    const lowStockAlertsList = document.getElementById('lowStockAlerts');
    lowStockAlerts.forEach(alert => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${alert.productName}</td>
            <td>${alert.stockLevel}</td>
            <td><button class="btn btn-warning btn-sm">Reorder</button></td>
        `;
        lowStockAlertsList.appendChild(row);
    });

    // Sales Chart
    const salesCtx = document.getElementById('salesChart').getContext('2d');
    new Chart(salesCtx, {
        type: 'bar',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Sales',
                data: salesData,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    // Revenue Chart
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    new Chart(revenueCtx, {
        type: 'pie',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Revenue',
                data: revenueData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(199, 199, 199, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(199, 199, 199, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });


    const sidebarBtnMobile = document.getElementById('toggleSidebarMobile');
    const sidebarSticky = document.querySelector('.sidebar-sticky')
    sidebarSticky.style.width = '-150px'
    sidebarBtnMobile.addEventListener('click', () => {
        alert('hey')
        if (sidebarSticky.style.width === '-150px') {
            sidebarSticky.style.width = '0'
        }
        else {
            sidebarSticky.style.width = '-150PX'
        }
    }
    )

    // Toggle Sidebar
    // document.getElementById('toggleSidebar').addEventListener('click', function () {
    //     document.querySelector('.sidebar').classList.toggle('sidebar-collapsed');
    // });

    // // Toggle Mobile Sidebar
    // document.getElementById('toggleSidebarMobile').addEventListener('click', function () {
    //     document.querySelector('.sidebar').classList.toggle('active');
    // });

    // // Toggle Theme
    // document.getElementById('themeToggle').addEventListener('click', function () {
    //     document.body.classList.toggle('dark-theme');
    //     document.body.classList.toggle('light-theme');
    //     this.innerText = document.body.classList.contains('dark-theme') ? 'Light Theme' : 'Dark Theme';
    // });
});

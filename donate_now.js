  // Hospital data by area
        const hospitalsByArea = {
            'Mirpur': [
                'National Heart Foundation',
                'Kidney Foundation Hospital',
                'CRP (Centre for the Rehabilitation of the Paralysed)',
                'Delta Hospital Ltd',
                'Dhaka Dental College Hospital',
                'Bangladesh Eye Hospital'
            ],
            'Uttara': [
                'Uttara Crescent Hospital',
                'Medical College for Women & Hospital',
                'Ahsania Mission Cancer Hospital',
                'Japan East West Medical College Hospital',
                'Lubana General Hospital'
            ],
            'Dhanmondi': [
                'Popular Medical College Hospital',
                'Ibn Sina Specialized Hospital',
                'Central Hospital Ltd',
                'Labaid Specialized Hospital',
                'Green Life Hospital Ltd'
            ],
            'Shahbagh': [
                'Dhaka Medical College & Hospital',
                'BSMMU (Bangabandhu Sheikh Mujib Medical University)',
                'BIRDEM General Hospital',
                'Ibrahim Cardiac Hospital'
            ],
            'Gulshan': [
                'United Hospital Ltd',
                'Evercare Hospital Dhaka',
                'Samorita Hospital',
                'Ibn Sina Diagnostic & Consultation Center',
                'Labaid Gulshan Branch'
            ],
            'Mohammadpur': [
                'Al-Manar Hospital',
                'Royal Multispecialty Hospital',
                'Millennium Heart & General Hospital',
                'Avenue Medical Centre',
                'Ibn Sina Hospital Mohammadpur'
            ],
            'Motijheel': [
                'Islami Bank Hospital Motijheel',
                'Ad-din Medical College Hospital',
                'Sir Salimullah Medical College & Mitford Hospital',
                'Shahid Monsur Ali Medical College Hospital',
                'National Hospital Motijheel Branch'
            ],
            'Tejgaon': [
                'Samadi Clinic & Hospital',
                'National Institute of Cancer Research & Hospital',
                'National Institute of Neurosciences & Hospital',
                'Life Line Hospital Tejgaon',
                'Urban Hospital Ltd'
            ]
        };
        
        // Toggle last donation field
        function toggleLastDonationField(show) {
            const lastDonationField = document.getElementById('last-donation-field');
            const lastDonationInput = document.getElementById('last-donation');
            
            if (show) {
                lastDonationField.style.display = 'block';
                lastDonationInput.setAttribute('required', 'required');
            } else {
                lastDonationField.style.display = 'none';
                lastDonationInput.removeAttribute('required');
                lastDonationInput.value = '';
            }
        }
        
        // Update hospitals based on selected area
        function updateHospitals() {
            const areaSelect = document.getElementById('area');
            const hospitalSelect = document.getElementById('hospital');
            const selectedArea = areaSelect.value;
            
            // Clear previous options
            hospitalSelect.innerHTML = '<option value="">Select Hospital</option>';
            
            // Add hospitals for selected area
            if (selectedArea && hospitalsByArea[selectedArea]) {
                hospitalsByArea[selectedArea].forEach(hospital => {
                    const option = document.createElement('option');
                    option.value = hospital;
                    option.textContent = hospital;
                    hospitalSelect.appendChild(option);
                });
            }
        }
         // Mobile menu toggle
    // document.addEventListener('DOMContentLoaded', function() {
    //     const menuToggle = document.createElement('div');
    //     menuToggle.className = 'menu-toggle';
    //     menuToggle.innerHTML = '<span></span><span></span><span></span>';
        
    //     const nav = document.querySelector('nav');
    //     nav.appendChild(menuToggle);
        
    //     const navLinks = document.querySelector('.nav-links');
        
    //     menuToggle.addEventListener('click', function() {
    //         navLinks.classList.toggle('active');
    //     });
        
    //     // Make submenus work on mobile
    //     const menuItems = document.querySelectorAll('nav li:has(.menu)');
    //     menuItems.forEach(item => {
    //         const link = item.querySelector('a');
    //         link.addEventListener('click', function(e) {
    //             if (window.innerWidth <= 768) {
    //                 e.preventDefault();
    //                 const menu = item.querySelector('.menu');
    //                 menu.classList.toggle('active');
    //             }
    //         });
    //     });
    // });
        
        // Update areas based on selected district
        function updateAreas() {
            const districtSelect = document.getElementById('district');
            const areaSelect = document.getElementById('area');
            
            // For now, only Dhaka is available
            if (districtSelect.value === 'Dhaka') {
                areaSelect.disabled = false;
            } else {
                areaSelect.disabled = true;
                areaSelect.value = '';
            }
        }
        
        // Set minimum date for donation date to today
        window.onload = function() {
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('donation-date').setAttribute('min', today);
            
            const lastDonationInput = document.getElementById('last-donation');
            lastDonationInput.setAttribute('max', today);
            
            // Initially hide last donation field
            document.getElementById('last-donation-field').style.display = 'none';
        };
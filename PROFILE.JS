document.addEventListener('DOMContentLoaded', () => {
    const typedOutput = document.getElementById('typed-output');
    if (typeof Typed === 'undefined') {
        typedOutput.textContent = 'Web Developer';
    } else {
        new Typed('#typed-output', {
            strings: [
                'Role', 
               'Web Developer',
                'Interests & Passions',
                'Cycling',
                'Web Development', 
                'Online Games', 
                'LeetCode Challenges', 
                'Motorsports', 
                'Matulog',

            ],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
            backDelay: 2000
        });
    }
});
let age = prompt('Insert your age.', 18);

let message = (age < 3) ? 'Hello baby?' : 
    (age < 18) ? 'Hi!' : 
    (age < 100) ? 'Welcome!' : 
    'your very old or not insert number';

alert (message) ;
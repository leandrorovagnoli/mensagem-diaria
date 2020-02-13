function getCurrentGreeting() {
    const currentHour = new Date().getHours();

    if (currentHour >= 0 && currentHour < 12)
        return 'Bom dia!';
    else if (currentHour >= 12 && currentHour < 18)
        return 'Boa tarde!';
    else if (currentHour >= 18)
        return 'Boa noite!'; 
}

export default getCurrentGreeting;
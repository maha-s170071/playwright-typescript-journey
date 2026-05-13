const retry = (functionName, attempts) => {

    for (let i = 1; i <= attempts; i++) {

        console.log(`Retrying the ${functionName} for attempt ${i}`);
    }
};

retry("playwrightCase1", 5);
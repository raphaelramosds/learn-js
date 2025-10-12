// O try vai testar o código
try {
    throw new Error("Unknown error");
}

// O catch vai tratar o erro que o try identificar
catch (e) {
    console.log(e.message)
}

// O finally vai ser executado caso ocorra um erro ou não
finally {
    console.log("Finishing execution anyway.")
}
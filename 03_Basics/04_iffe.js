// Imediately Invocked Function Expression

(function chai() {
    console.log(`DB Connection`);
})();

((name) => {
    console.log(`DB Connection Two ${name}`);
} )("Fahad")
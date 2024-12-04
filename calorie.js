document.querySelectorAll(".calculator input").forEach(function(input) {
    input.addEventListener("input", function(event) {
        var parameterName = this.id.split("calc-")[1];
        var value = this.value;

        switch (parameterName) {
            case "height":
                document.getElementById("calc-height_value").innerHTML = "Height: " + value + " cm";
                break;
            case "weight":
                document.getElementById("calc-weight_value").innerHTML = "Weight: " + value + " kg";
                break;
            case "age":
                document.getElementById("calc-age_value").innerHTML = "Age: " + value;
                break;
            case "cardio":
                document.getElementById("calc-cardio_value").innerHTML = "Cardio: " + value + " hours per week";
                break;
            case "walking":
                document.getElementById("calc-walking_value").innerHTML = "Walking: " + value + " hours per week";
                break;
        }

        var height = parseInt(document.getElementById("calc-height").value, 10);
        var age = parseInt(document.getElementById("calc-age").value, 10);
        var weight = parseInt(document.getElementById("calc-weight").value, 10);
        var walking = parseInt(document.getElementById("calc-walking").value, 10);
        var cardio = parseInt(document.getElementById("calc-cardio").value, 10);
        var gender = document.querySelector(".calculator input[name='gender']:checked").value;

        var bmr = parseInt(10 * weight + 6.25 * height - 5 * age, 10) + (gender === "male" ? 5 : -161);
        bmr = bmr * 1.2;
        bmr += walking * 60 * (.03 * weight * 1 / 0.45) / 7;
        bmr += cardio * 60 * (.07 * weight * 1 / 0.45) / 7;
        bmr = Math.floor(bmr);

        var targetGainWeight = Math.round((bmr + 300) / 100) * 100;
        var targetMaintain = Math.round(bmr / 100) * 100;
        var targetLoseWeight = Math.round((bmr - 500) / 100) * 100;

        document.getElementById("calc-target-gain").querySelector("span").innerHTML = targetGainWeight + " calories";
        document.getElementById("calc-target-maintain").querySelector("span").innerHTML = targetMaintain + " calories";
        document.getElementById("calc-target-lose").querySelector("span").innerHTML = targetLoseWeight + " calories";
    });
});

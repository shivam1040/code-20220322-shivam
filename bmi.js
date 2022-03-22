//Find bmi and its related attributes from a json dataset and add these append these attributes to the dataset

var data=[{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, {"Gender": "Male", "HeightCm": 161,
"WeightKg":85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female",
"HeightCm": 166,"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70},
{"Gender": "Female","HeightCm": 167, "WeightKg": 82}];
var res=[];
var overweightCount=0;

function bmiCalc(dataset){
    let cmToM=100;
    for(let i=0; i<data.length; i++){
        let heightInM=(dataset[i].HeightCm)/cmToM;
        let weight=dataset[i].WeightKg;
        let bmi=weight/Math.pow(heightInM, 2);
        dataset[i]["BMI"]=parseFloat(bmi.toFixed(2));
        if(bmi<=18.4){
            dataset[i]["BMICategory"]="Underweight";
            dataset[i]["HealthRisk"]="Malnutrition risk";
        }
        else if(bmi>=18.5 && bmi<=24.9){
            dataset[i]["BMICategory"]="Normal weight";
            dataset[i]["HealthRisk"]="Low risk";
        }
        else if(bmi>=25 && bmi<=29.9){
            dataset[i]["BMICategory"]="Overweight";
            dataset[i]["HealthRisk"]="Enhanced risk";
            overweightCount=overweightCount+1;
        }
        else if(bmi>=30 && bmi<=34.9){
            dataset[i]["BMICategory"]="Moderately obese";
            dataset[i]["HealthRisk"]="Medium risk";
        }
        else if(bmi>=35 && bmi<=39.9){
            dataset[i]["BMICategory"]="Severely obese";
            dataset[i]["HealthRisk"]="High risk";
        }
        else if(bmi>=40){
            dataset[i]["BMICategory"]="Very severely obese";
            dataset[i]["HealthRisk"]="Very high risk";
        }
    }
}

bmiCalc(data);
console.log(data);
console.log("\nCount of overweight people is "+overweightCount);
// Code your solution in this file!
function distanceFromHqInBlocks(block){
    let distance = block - 42;
    if(distance < 0){
        distance*=-1;
    }

    return distance

}

function distanceFromHqInFeet(value){
    return distanceFromHqInBlocks(value) * 264;
}

function distanceTravelledInFeet(start, destination){
    let block = start - destination;
    if(block <0){
        block*=-1;
    }
    return block*264;

}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);

    if (feet < 400){
        return 0
    }else if(feet >= 400 && feet <= 2000){
        feet-=400;
        return feet *.02;
    }else if(feet > 2000 && feet <2500){
        return 25
    }else{
        return 'cannot travel that far'
    }
  }

  console.log(distanceFromHqInBlocks(41))
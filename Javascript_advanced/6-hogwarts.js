function studentHogwarts(privateScore = 0, name = null) {
    function changeScoreBy(points) {
        privateScore += points;
    }
    return {
        name: name,
        setName(newName) {
            this.name = newName;
        },
        rewardStudent() {
            changeScoreBy(1);
        },
        penalizeStudent() {
            changeScoreBy(-1);
        },
        getScore() {
            return `${this.name}: ${privateScore}`;
        }
    }
}

const harry = new studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());
const draco = new studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());

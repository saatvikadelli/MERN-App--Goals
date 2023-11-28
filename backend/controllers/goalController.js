

const Goal = require('../model/goalModel.js');


//@dec Get goals
//@route GET /api/goals
//@access Private
const getGoals = async (req, res) => {
    try {
        const goals = await Goal.find();
        res.status(200).json(goals);
    } catch (error) {
        console.log(error);
    }

}



//@dec set goals test test

//@route POST /api/goals
//@access Private
const setGoals = async (req, res) => {

    const goal = await Goal.create({
        text: req.body.text

    })
    res.status(200).json(goal);
}


//@dec PUT goals
//@route PUT /api/goals/:d - 5000/api/goals/:id
//@access Private
const putGoals = async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400)
        throw new Error('Goal not Found');
    }
    const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updateGoal);
}


//@dec Get goals
//@route DELETE /api/goals/:id
//@access Private
const deleteGoals = async (req, res) => {
    await Goal.deleteOne({ _id: req.params.id });

    res.status(200).json({ id: req.params.id });
}
module.exports = {
    getGoals,
    setGoals,
    putGoals,
    deleteGoals
}
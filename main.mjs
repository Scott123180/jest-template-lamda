export function programHasFilledUp(storedProgram, newProgram) {
    return (storedProgram.hasRegistration === true
        && newProgram.hasWaitingList === true);
}


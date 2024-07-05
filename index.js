// Variable to store the branch instance.
let bankBranchInstance = null;

// Class with an if statement to verify if our variable is null.
class BankBranch {
    constructor(branchInfo) {
        if (!bankBranchInstance) {
            this.branchInfo = branchInfo;
            bankBranchInstance = this;
        }
        return bankBranchInstance;
    }

    getBranchInfo() {
        return this.branchInfo;
    }
}

// Creation of new branches with objects.
const branchA = new BankBranch({
    name: "Main Branch",
    location: "Thailand"
});

console.log(branchA.getBranchInfo());

const branchB = new BankBranch({
    name: "Sub Branch",
    location: "Bangkok"
});

console.log(branchB.getBranchInfo());

console.log(branchA === branchB);

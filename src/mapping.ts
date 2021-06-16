import { Approval } from "../generated/USDC/USDC";
import { History, Allowance } from "../generated/schema";

export function handleApproval(event: Approval) : void {
    let hash = event.transaction.hash.toHexString();
    let owner = event.params.owner.toHexString();
    let spender = event.params.spender.toHexString();

    let history = History.load(hash);
    let allowance = Allowance.load(owner + '-' + spender);

    if(history === null) {
        history = new History(hash);
    }

    if(allowance === null) {
        allowance = new Allowance(owner + '-' + spender);
    }

    history.owner = event.params.owner;
    history.spender = event.params.spender;
    history.asset = event.address;
    history.value = event.params.value;

    allowance.value = event.params.value;

    allowance.save();
    history.save();
}
class DMV {
    constructor(agents) {
        this.agents = agents;
        this.queue = [];
        this.attending = {};
    }

    enter(customer) {
        this.queue.push(customer);
    }

    customersInLine() {
        return this.queue;
    }

    nextCustomer() {
        this.attending[this.agents.shift()] = this.queue.shift();
    }

    currentCustomerFor(agent) {
        return this.attending[agent] || null;
    }

    resolve(customer) {
        for(var attendingAgent in this.attending) {
            if (this.attending[attendingAgent] === customer) {
                delete this.attending[attendingAgent];
                this.agents.push(attendingAgent);
            }
        }
    }

}

module.exports = DMV;

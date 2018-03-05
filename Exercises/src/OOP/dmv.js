class DMV {
    constructor(agents) {
        this.agents = agents;
        this.queue = [];
        this.inService = {};
    }

    enter(customer) {
        this.queue.push(customer);
    }

    customersInLine() {
        return this.queue;
    }

    nextCustomer() {
        this.inService[this.agents.shift()] = this.queue.shift();
    }

    currentCustomerFor(agent) {
        return this.inService[agent] || null;
    }

    resolve(customer) {
        for(let agent in this.inService) {
            if(this.inService[agent] === customer) {
                delete this.inService[agent];
                this.agents.push(agent);
            }
        }
    }
}

module.exports = DMV;
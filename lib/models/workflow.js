function isProperty(item) {
    return item.type == 'function' && item.outputs.length > 0;
}

function parseProperty(item) {
    return {
        Name: item.name,
        DisplayName: item.name,
        Description: 'TODO',
        Type: {
            Name: 'TODO'
        }
    }
}

function isConstructor(item) {
    return item.type == 'constructor';
}

function parseParameter(item) {
    return {
        Name: item.name,
        Description: 'TODO',
        DisplayName: 'TODO',
        Type: {
            Name: item.type
        }
    }
}

class Workflow {
    constructor(contractName, abi) {
        this.Name = contractName;
        this.DisplayName = 'TODO';
        this.Description = 'TODO';
        this.Initiators = 'TODO';
        this.StartState = 'TODO';
        this.Properties = this.getProperties(abi);
        this.Constructor = this.getConstructor(abi);
        this.Functions = [];
        this.States = [];
    }

    getProperties(abi) {
        return abi
            .filter(isProperty)
            .map(parseProperty);
    }

    getConstructor(abi) {
        var constructor = abi.find(isConstructor);

        var parameters = {
            Parameters: constructor.inputs.map(parseParameter)
        };

        return parameters;
    }
};

module.exports = Workflow;
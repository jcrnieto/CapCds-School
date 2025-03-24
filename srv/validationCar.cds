using {businessSpace as business} from '../db/business';

@impl: 'srv/handlers/validationCar.handler.js'

service validationCar {
    entity Cars as projection on business.Cars {
        *,
        status.name as statusName,
        branch.name as branchName
    };
    
}
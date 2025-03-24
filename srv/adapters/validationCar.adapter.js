const {carValidation} = require ("../validations/car.validation");

exports.carValidationAdapter = async (req) => {
    console.log("📌 Datos recibidos en handler:", req.data);
    
    const { error } = carValidation(req.data);

    if (error) {
        const errors = error.details.map(err => err.message);
        req.error(400, 'Error de validación', { errors });

        // Usamos req.reject para que CAP lo maneje correctamente
        return req.reject(400, `Error de validación: ${errors}`);
        
    }
    console.log("✅ Datos validados correctamente, continuando con la lógica...");

    if (req.data.statusName) {
        const status = await SELECT.one.from("masterSpace.StatusCard").where({ name: req.data.statusName });
        if (!status) return req.reject(400, `El estado '${req.data.statusName}' no existe.`);
        req.data.status =  { id: status.id }; 
        return
    }

    // if (req.data.branchName) {
    //     const branch = await SELECT.ONE
    // }
};


    


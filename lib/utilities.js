export function filterAllVehicleTypes(vehiclesData) {
    let uniqueVehicleTypes = [];
    
    const filteredTypes = vehiclesData.map((vehicle) => {
        const { vehicleTypes } = vehicle.node.vechicleInformation;
        // avoid duplicates
        vehicleTypes.forEach((vehicleType) => {
            if (!uniqueVehicleTypes.includes(vehicleType)) {
                uniqueVehicleTypes.push(vehicleType);
            }
        });
    });
    return uniqueVehicleTypes;
}
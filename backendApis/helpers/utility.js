const formatResponse = (
    statusCode,
    status,
    message = "",
    payload = {},
) => {
    return {
        status,
        statusCode,
        message,
        ...payload,
    };
};

const createResponse = (response) => {
    if (
        typeof response.error !== "undefined" &&
        typeof response.error.details !== "undefined" &&
        Array.isArray(response.error.details)
    ) {
        return {
            statusCode: 400,
            status: "error",
            message: response.error.details[0].message,
        };
    } else if (typeof response.statusCode !== "undefined") {
        return response;
    }
};

module.exports = {
    createResponse,
    formatResponse,
}


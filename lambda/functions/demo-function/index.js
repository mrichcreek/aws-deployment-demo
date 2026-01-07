/**
 * Demo Lambda Function
 *
 * This function is automatically deployed when changes are merged
 * to the main branch via GitHub Actions.
 *
 * Version: 1.0.0
 */

exports.handler = async (event) => {
    console.log('Event received:', JSON.stringify(event, null, 2));

    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            message: 'Hello from AWS Lambda!',
            version: '1.0.0',
            timestamp: new Date().toISOString(),
            deployment: 'Automated via GitHub Actions',
            event: event
        }, null, 2)
    };

    return response;
};

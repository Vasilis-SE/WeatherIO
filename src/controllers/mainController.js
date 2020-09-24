class ControllerMain {
    constructor({ params, query, body, send }) {
		this.params = params;
		this.query = query;
		this.body = body;
		this.send = send;
    }
  
    error(err) {
		const status = err.statusCode || err.status;
		const statusCode = status || 500;
		this.send(statusCode, err);
    }
  
    created(location, data) {
		if (location) {
			this.send(201, null, location);
		}
	
		this.send(201, data);
    }
  
    success(data) { this.send(200, data); }
  
    badRequest(data) { this.send(400, data); }
  
	forbidden(data) { this.send(403, data); }

	notAcceptable(data) { this.send(406, data); }

	serviceUnavailable(data) { this.send(503, data); }
}
  
module.exports = ControllerMain;
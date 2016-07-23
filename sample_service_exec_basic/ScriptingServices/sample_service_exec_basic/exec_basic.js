/* globals $ */
	/* eslint-env node, dirigible */

	var exec = require('service/exec');
	var response = require('net/http/response');

	var context = {"input_param": "input_param_value"};

	// Test execution
	var result = exec.test("/service/exec_target_basic.js", context);

	response.println("Printing output parameter: " + result.context.output_param);

	// use also exec.js(), exec.flow(), exec.job(), exec.sql(), exec.command() ...

	response.flush();
	response.close();
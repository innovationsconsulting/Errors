Ext.define('Errors.controller.ControllerErrors', {
	extend : 'Ext.app.Controller',
	requires : [
		'Ext.JSON'
	],
	config : {
		refs : {
			clickbtn : '#btnTap'
		},
		control : {

			clickbtn : {
				tap : 'ButtonTap',
				
			}
		}
	},

	ButtonTap : function (th, e, eOpts) {
		Ext.define('User', {
			extend: 'Ext.data.Model',
			config: {
				fields: ['leadName', 'autoLeadId']
			}
		});
		var person = Ext.ModelManager.getModel('User');
		var ed = new person({
			leadName: 'Ed Spencer',
			autoLeadId : 25
		});
		
		var errors = ed.validate();

		
		console.log(errors.isValid());
		console.log(errors.length); 
		console.log(errors.getByField('leadName')); 
		console.log(errors.getByField('autoLeadId'));
		
	}
});
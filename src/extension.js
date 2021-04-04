function activate(content) {
	goby.registerCommand('threatbook', function () {
		// 获取 TreatBook API 配置
		let config = goby.getConfiguration();
		let key = config.key.default;
		if (key) {
			// 显示情报展示页
			goby.showPage('./threatbook.html',true);
		} else {
			// 显示API配置界面
			goby.showConfigurationDia();
		}
	})
}

exports.activate = activate;

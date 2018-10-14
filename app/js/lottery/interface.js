import $ from 'jquery';
class Interface {
    /**
     * [getOmit 获取遗漏]
     * @param {string} issue [当前期号]
     * @return {[type]}      [description]
     */
    getOmit(issue) {
        let self = this;
        return new Promise((resolve, rejects) => {
            $.ajax({
                url: '/get/omit',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function(res) {
                    self.setOmit(res.date);
                    resolve(self, res);
                },
                error: function(err) {
                    rejects(err);
                }
            })
        })
    };
    /**
     * [getOpenCode 获取遗漏]
     * @param {string} issue [期号]
     * @return {[type]}      [description]
     */
    getOpenCode(issue) {
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/opencode',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function(res) {
                    self.setOpenCode(res.data);
                    resolve.call(self, res);
                },
                error: function(err) {
                    reject.call(err);
                }
            })
        })
    };
    /**
     * [getState 获取当前状态]
     * @param {string} issue [当前期号]
     * @return {[type]}      [description]
     */
    getState(issue) {
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/state',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function(res) {
                    resolve.call(self, res);
                },
                error: function(err) {
                    reject.call(err);
                }
            })
        })
    }
}

export default Interface;
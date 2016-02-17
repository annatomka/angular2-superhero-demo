var name_list_1 = require('./name_list');
function main() {
    describe('NameList Service', function () {
        var nameList;
        beforeEach(function () {
            nameList = new name_list_1.NameList;
        });
        it('should return the list of names', function () {
            var names = nameList.get();
            expect(names).toEqual(jasmine.any(Array));
        });
    });
}
exports.main = main;
//# sourceMappingURL=name_list_spec.js.map
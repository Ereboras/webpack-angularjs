describe('A test suite', function () {
    var oneVar;
    beforeEach(module('authModule'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('should success', function () {
        oneVar = $controller('loginComponent');
        expect(oneVar.email).to.be.equal("");
    });
});
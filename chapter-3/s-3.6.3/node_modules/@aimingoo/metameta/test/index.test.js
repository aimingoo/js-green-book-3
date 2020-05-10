var {Meta, MetaClass, MetaObject} = require('../index.js');
var {isMeta, isAtom, asAtom} = Meta;
var expect = require('chai').expect;
var mlog = require('mocha-logger');

describe("All atoms", ()=> {
	it('null is atom', ()=> {
		expect(isAtom(null)).to.be.true;
	});

	it('Meta is atom', ()=> {
		expect(isAtom(Meta)).to.be.true;
	});

	it('MetaClass is atom', ()=> {
		expect(isAtom(MetaClass)).to.be.true;
	});

	it('MetaObject is atom', ()=> {
		expect(isAtom(MetaObject)).to.be.true;
	});

	it('Atom is atom', ()=> {
		expect(new Meta).to.satisfy(isAtom);
	});

	it('Shadow meta is atom', ()=> {
		expect(Meta.from(Object)).to.satisfy(isAtom);
	});
});

describe("Core framework", ()=> {
	it('meta/Atom is result of new Meta(), isnt "Meta type"', ()=> {
		var Atom = meta = new Meta;
		expect(meta).to.not.satisfy(isMeta);
	});

	it('Shadow meta is Atom-like', ()=> {
		expect(Meta.from(Object)).to.not.satisfy(isMeta);
	});

	it('Construct with base', ()=> {
		var AtomX = new Meta;
		var X = new Meta(AtomX);
		expect(X).to.be.a('function').and.satisfy(isAtom).and.not.satisfy(isMeta); // is meta
		expect(new X).to.be.a('object').and.satisfy(isAtom); // is atom
		expect(new X instanceof X).to.be.true; // instanceof accept
	});

	it('Ignore when base is not atom, but will return a simple Atom', ()=> {
		var simpleAtom = new Meta(Object);
		expect(simpleAtom).to.satisfy(isAtom);
		expect(simpleAtom).not.have.key('toString');
	});

	describe("Shadow meta", ()=>{
		var Objext = Meta.from(Object);

		it('shadow is atom, and is Atom constructor', ()=> {
			expect(Objext).to.satisfy(isAtom).and.be.a('function');
		});

		it('class method inhertied from orignal constructor', ()=> {
			// BUG: expect(Objext).to.not.have.own.property('keys');
			expect(Objext).to.have.property('keys', Object.keys).and.not.have.ownPropertyDescriptor('keys');
		});

		it('class method inhertied from orignal constructor\'s super', ()=> {
			expect(Objext).to.have.property('toString', Object.toString).and.not.have.ownPropertyDescriptor('toString');
		});

		it('create atom instnace', ()=> {
			expect(new Objext).to.satisfy(isAtom);
		});

		it('create atom instnace with orignal interface', ()=> {
			expect(new Objext(3)).to.satisfy(isAtom);
		});
	});

	describe("Default asAtom() and X.from() method", ()=>{
		it('any objects as atom', ()=> {
			expect(asAtom(new Function)).to.satisfy(isAtom);
			expect(asAtom(new Object)).to.satisfy(isAtom);
		});

		it('if set base for asAtom() call, isPrototypeOf check is affected, but not extends', ()=> {
			// force base is not truth behavior for native constructor
			var faked = Meta.asAtom(Object, MetaClass);
			expect(faked).to.satisfy(isMeta);
			expect(Object.prototype.isPrototypeOf.call(MetaClass, faked)).to.be.is.true;
			expect(Meta.from(faked)).to.not.have.ownPropertyDescriptor('isClassOf');
		});

		it('X.from(meta) will prototype inherit from <X.prototype>', ()=> {
			var MetaX = class extends Meta { foo() { } };
			var Objext = MetaX.from(Object);
			var atom = new Objext;
			expect(atom).to.have.property('foo', MetaX.prototype.foo)
				.and.not.have.ownPropertyDescriptor('foo');
		});

		it('X.from(meta) will class methods inherited from <meta>', ()=> {
			var meta = AtomObject = new MetaClass; // same of MetaObject
			var meta2 = AtomObject2 = Meta.from(meta);

			expect(MetaClass.isClassOf(meta)).to.be.true;
			expect(MetaClass.isClassOf(meta2)).to.be.false;

			meta.staticMethd = new Function;
			expect(meta2).to.have.property('staticMethd', meta.staticMethd)
				.and.not.have.ownPropertyDescriptor('staticMethd');
		});

		it('X.from(meta) same of new X(meta) when put meta/Atom as parament', ()=> {
			var meta = AtomObject = new MetaClass; // same of MetaObject

			// Meta.from(meta) vs. new Meta(AtomObject)
			var x1 = Meta.from(meta), x2 = new Meta(AtomObject);
			expect([
				// class's super
				Object.getPrototypeOf(Object.getPrototypeOf(x1)) === meta, // super's super
				Object.getPrototypeOf(x2) === meta, // super once
				Object.prototype.isPrototypeOf.call(meta, x1),
				Object.prototype.isPrototypeOf.call(meta, x2),
				// instance's prototype
				Object.getPrototypeOf(x1.prototype) === Meta.prototype,
				Object.getPrototypeOf(x2.prototype) === Meta.prototype
			]).to.not.include(false);
		});
	});
});

describe("Meta classes system", ()=> {
	describe("Meta classes", ()=>{
		it('MetaClass is extends-class\'s super', ()=> {
			var child = class extends MetaClass{};
			expect(MetaClass.isClassOf(child)).to.be.true;
		});

		it('MetaClass is atom\'s super', ()=> {
			expect(MetaClass.isClassOf(new MetaObject)).to.be.true;
		});

		it('MetaClass is MetaObject\'s super', ()=> {
			expect(MetaClass.isClassOf(MetaObject)).to.be.true;
		});

		it('MetaClass is super of MetaObject\'s children too', ()=> {
			var child = class extends MetaObject{};
			expect(MetaClass.isClassOf(child)).to.be.true;
		});
	});

	describe("Meta objects", ()=>{
		it('MetaObject is meta', ()=> {
			expect(MetaObject).to.be.a('function').and.satisfy(isAtom).and.not.satisfy(isMeta);
		});
		it('MetaObject is Atom-constructor', ()=> {
			expect(new MetaObject).to.be.a('object').and.satisfy(isAtom);
		});
		it('instanceof accept', ()=> {
			expect(new MetaObject).to.be.an.instanceof(MetaObject);
		});
	});
});

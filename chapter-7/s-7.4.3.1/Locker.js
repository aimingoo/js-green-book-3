const STATE_UNLOCKED = Number(false);
const STATE_LOCKED = Number(true);
const LOCK_COUNT = 1;
const LOCK_INDEX = 0;

class Locker {
  constructor(sab, offset) {
    this.state = new Int32Array(sab, offset, LOCK_COUNT);
  }

  lock2() {
    while (true) {
      let old = Atomics.compareExchange(this.state, LOCK_INDEX, STATE_UNLOCKED, STATE_LOCKED);
      if (old == STATE_UNLOCKED) return; // locking: unlocked -> locked
      Atomics.wait(this.state, LOCK_INDEX, old); // if equal old, will wait wake or timeout
    }
  }

  lock() {
    // if is 'not-equal', will non-lock and return immediately
    while (Atomics.wait(this.state, LOCK_INDEX, STATE_LOCKED)) {
      let old = Atomics.compareExchange(this.state, LOCK_INDEX, STATE_UNLOCKED, STATE_LOCKED);
      if (old == STATE_UNLOCKED) return; // locking: unlocked -> locked
    }
  }

  unlock() {
    // Atomics.store(this.state, LOCK_INDEX, STATE_UNLOCKED);
    if (Atomics.compareExchange(this.state, LOCK_INDEX, STATE_LOCKED, STATE_UNLOCKED) !== STATE_LOCKED) {
      throw new Error ("Try unlock twice");
    }
    Atomics.notify(this.state, LOCK_INDEX, 1); // wake one
  }
}

module.exports = Locker;

/**********************************************************************
 * Extern for ReactPopper
 * Generated by http://jmmk.github.io/javascript-externs-generator
 **********************************************************************/
var ReactPopper = {
  "Manager": {
    "childContextTypes": {
      "popperManager": function () {}
    },
    "propTypes": {
      "component": {
        "isRequired": function () {}
      }
    },
    "defaultProps": {
      "component": {}
    }
  },
  "Target": {
    "contextTypes": {
      "popperManager": function () {}
    },
    "propTypes": {
      "component": {
        "isRequired": function () {}
      }
    },
    "defaultProps": {
      "component": {}
    }
  },
  "Popper": {
    "contextTypes": {
      "popperManager": function () {}
    },
    "childContextTypes": {
      "popper": function () {}
    },
    "propTypes": {
      "component": {
        "isRequired": function () {}
      },
      "placement": {
        "isRequired": function () {}
      },
      "eventsEnabled": {
        "isRequired": function () {}
      },
      "modifiers": {
        "isRequired": function () {}
      }
    },
    "defaultProps": {
      "component": {},
      "placement": {},
      "eventsEnabled": {},
      "modifiers": {},
      "className": {}
    }
  },
  "Arrow": {
    "contextTypes": {
      "popper": function () {}
    },
    "propTypes": {
      "component": {
        "isRequired": function () {}
      }
    },
    "defaultProps": {
      "component": {},
      "className": {}
    }
  }
};
ReactPopper.Manager.prototype = {
  "isReactComponent": function () {},
  "setState": function () {},
  "forceUpdate": function () {}
};
ReactPopper.Target.prototype = {
  "isReactComponent": function () {},
  "setState": function () {},
  "forceUpdate": function () {}
};
ReactPopper.Popper.prototype = {
  "isReactComponent": function () {},
  "setState": function () {},
  "forceUpdate": function () {}
};
ReactPopper.Arrow.prototype = {
  "isReactComponent": function () {},
  "setState": function () {},
  "forceUpdate": function () {}
};
/**********************************************************************
 * End Generated Extern for ReactPopper
/**********************************************************************/
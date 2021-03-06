/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$===', '$to_i', '$last_match', '$delete', '$sort', '$checkRoll', '$roll', '$gsub', '$collect', '$split', '$each', '$count', '$>', '$push', '$+', '$join']);
  return (function($base, $super, $parent_nesting) {
    function $OrgaRain(){};
    var self = $OrgaRain = $klass($base, $super, 'OrgaRain', $OrgaRain);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_OrgaRain_initialize_1, TMP_OrgaRain_gameName_2, TMP_OrgaRain_gameType_3, TMP_OrgaRain_getHelpMessage_4, TMP_OrgaRain_rollDiceCommand_5, TMP_OrgaRain_checkRoll_8;

    def.sortType = nil;
    
    
    Opal.defn(self, '$initialize', TMP_OrgaRain_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_OrgaRain_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_OrgaRain_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_OrgaRain_initialize_1, false), $zuper, $iter);
      return (self.sortType = 1);
    }, TMP_OrgaRain_initialize_1.$$arity = 0);
    self.$setPrefixes(["(\\d+)?OR([0-9])?([0-9])?([0-9])?([0-9])?([0-9])?([0-9])?"]);
    
    Opal.defn(self, '$gameName', TMP_OrgaRain_gameName_2 = function $$gameName() {
      var self = this;

      return "在りて遍くオルガレイン"
    }, TMP_OrgaRain_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_OrgaRain_gameType_3 = function $$gameType() {
      var self = this;

      return "OrgaRain"
    }, TMP_OrgaRain_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_OrgaRain_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "判定：[n]OR(count)\n" + "\n" + "[]内のコマンドは省略可能。\n" + "「n」でダイス数を指定。省略時は「1」。\n" + "(count)で命数を指定。「3111」のように記述。最大6つ。順不同可。\n" + "\n" + "【書式例】\n" + "・5OR6042 → 5dで命数「0,2,4,6」の判定\n" + "・6OR33333 → 6dで命数「3,3,3,3,3」の判定。\n"
    }, TMP_OrgaRain_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$rollDiceCommand', TMP_OrgaRain_rollDiceCommand_5 = function $$rollDiceCommand(command) {
      var $a, self = this, diceCount = nil, countNo = nil;

      
      if ($truthy(/(\d+)?OR([0-9])?([0-9])?([0-9])?([0-9])?([0-9])?([0-9])?$/i['$==='](command))) {
        
        diceCount = ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) ? $a : 1).$to_i();
        countNo = [($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(2)) ? $a : -1).$to_i(), ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(3)) ? $a : -1).$to_i(), ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(4)) ? $a : -1).$to_i(), ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(5)) ? $a : -1).$to_i(), ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(6)) ? $a : -1).$to_i(), ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(7)) ? $a : -1).$to_i()];
        countNo.$delete(-1);
        countNo = countNo.$sort();
        return self.$checkRoll(diceCount, countNo);};
      return nil;
    }, TMP_OrgaRain_rollDiceCommand_5.$$arity = 1);
    return (Opal.defn(self, '$checkRoll', TMP_OrgaRain_checkRoll_8 = function $$checkRoll(diceCount, countNo) {
      var $a, $b, TMP_6, TMP_7, self = this, _dice = nil, diceText = nil, diceText2 = nil, diceArray = nil, resultArray = nil, success = nil, countText = nil, resultText = nil, result = nil;

      
      $b = self.$roll(diceCount, 10, self.sortType), $a = Opal.to_ary($b), (_dice = ($a[0] == null ? nil : $a[0])), (diceText = ($a[1] == null ? nil : $a[1])), $b;
      diceText2 = diceText.$gsub("10", "0");
      diceArray = $send(diceText2.$split(/,/), 'collect', [], (TMP_6 = function(i){var self = TMP_6.$$s || this;
if (i == null) i = nil;
      return i.$to_i()}, TMP_6.$$s = self, TMP_6.$$arity = 1, TMP_6));
      resultArray = [];
      success = 0;
      $send(diceArray, 'each', [], (TMP_7 = function(i){var self = TMP_7.$$s || this, multiple = nil;
if (i == null) i = nil;
      
        multiple = countNo.$count(i);
        if ($truthy($rb_gt(multiple, 0))) {
          
          resultArray.$push("" + (i) + "(x" + (multiple) + ")");
          return (success = $rb_plus(success, multiple));
          } else {
          return resultArray.$push("×")
        };}, TMP_7.$$s = self, TMP_7.$$arity = 1, TMP_7));
      countText = countNo.$join(",");
      resultText = resultArray.$join(",");
      result = "" + (diceCount) + "D10(命数：" + (countText) + ") ＞ " + (diceText) + " ＞ " + (resultText) + " ＞ 成功数：" + (success);
      return result;
    }, TMP_OrgaRain_checkRoll_8.$$arity = 2), nil) && 'checkRoll';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);

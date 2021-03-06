/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$upcase', '$===', '$to_i', '$last_match', '$get_emancipation_table', '$get_personality_table', '$get_location_table', '$get_quiet_table', '$get_delight_table', '$get_trauma_table', '$get_scene_production_table', '$get_stance_table', '$get_emotion_table', '$>', '$roll', '$get_table_by_number', '$>=', '$+', '$get_Alter_raise_1d6_table_result', '$get_Alter_raise_d66_table_result', '$to_s', '$[]', '$<', '$*']);
  return (function($base, $super, $parent_nesting) {
    function $Alter_raise(){};
    var self = $Alter_raise = $klass($base, $super, 'Alter_raise', $Alter_raise);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_Alter_raise_initialize_1, TMP_Alter_raise_gameName_2, TMP_Alter_raise_gameType_3, TMP_Alter_raise_getHelpMessage_4, TMP_Alter_raise_rollDiceCommand_5, TMP_Alter_raise_get_emancipation_table_6, TMP_Alter_raise_get_personality_table_7, TMP_Alter_raise_get_location_table_8, TMP_Alter_raise_get_quiet_table_9, TMP_Alter_raise_get_delight_table_10, TMP_Alter_raise_get_trauma_table_11, TMP_Alter_raise_get_scene_production_table_12, TMP_Alter_raise_get_stance_table_13, TMP_Alter_raise_get_emotion_table_14, TMP_Alter_raise_get_Alter_raise_1d6_table_result_15, TMP_Alter_raise_get_Alter_raise_d66_table_result_16;

    
    self.$setPrefixes(["EMA(\\d+)?", "PER(\\d+)?", "LOC(\\d+)?", "QUI(\\d+)?", "DEL(\\d+)?", "TRA(\\d+)?", "SCE(\\d+)?", "STA(\\d+)?", "EMO(\\d+)?"]);
    
    Opal.defn(self, '$initialize', TMP_Alter_raise_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_Alter_raise_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_Alter_raise_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      return $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_Alter_raise_initialize_1, false), $zuper, $iter)
    }, TMP_Alter_raise_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_Alter_raise_gameName_2 = function $$gameName() {
      var self = this;

      return "心衝想機TRPGアルトレイズ"
    }, TMP_Alter_raise_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_Alter_raise_gameType_3 = function $$gameType() {
      var self = this;

      return "Alter_raise"
    }, TMP_Alter_raise_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_Alter_raise_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "◆解放判定：EMA[x]\n" + "\n" + "[x]で達成値を指定してください。省略時はダイスロールします。\n" + "\n" + "\n" + "【各種表】\n" + "◆性格傾向表：PER[n]　　　　　　 ◆場所表：LOC[ab]\n" + "◆平穏・経験表：QUI[ab]　　　　　◆喜び・経験表：DEL[ab]\n" + "◆心の傷・経験表：TRA[ab]　　　　◆シーン演出表：SCE[n]\n" + "◆スタンス表：STA[n]　　　　　　 ◆感情表：EMO[ab]\n" + "\n" + "[]内のコマンドを省略でダイスロール、指定でROC結果を表示します。\n" + "[n]は「1D6」、[ab]は「D66」の出目を指定してください。\n" + "\n" + "【書式例】\n" + "PER3：性格傾向表の「3」をROC\n" + "LOC52：場所表の「52」をROC\n" + "QUI：平穏・経験表をダイスロール\n"
    }, TMP_Alter_raise_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$rollDiceCommand', TMP_Alter_raise_rollDiceCommand_5 = function $$rollDiceCommand(command) {
      var $a, self = this, output = nil, $case = nil, roc = nil;

      
      output = (function() {$case = command.$upcase();
      if (/EMA(\d+)?$/i['$===']($case)) {
      roc = ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) ? $a : 0).$to_i();
      return self.$get_emancipation_table(roc);}
      else if (/PER(\d+)?$/i['$===']($case)) {
      roc = ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) ? $a : 0).$to_i();
      return self.$get_personality_table(roc);}
      else if (/LOC(\d+)?$/i['$===']($case)) {
      roc = ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) ? $a : 0).$to_i();
      return self.$get_location_table(roc);}
      else if (/QUI(\d+)?$/i['$===']($case)) {
      roc = ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) ? $a : 0).$to_i();
      return self.$get_quiet_table(roc);}
      else if (/DEL(\d+)?$/i['$===']($case)) {
      roc = ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) ? $a : 0).$to_i();
      return self.$get_delight_table(roc);}
      else if (/TRA(\d+)?$/i['$===']($case)) {
      roc = ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) ? $a : 0).$to_i();
      return self.$get_trauma_table(roc);}
      else if (/SCE(\d+)?$/i['$===']($case)) {
      roc = ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) ? $a : 0).$to_i();
      return self.$get_scene_production_table(roc);}
      else if (/STA(\d+)?$/i['$===']($case)) {
      roc = ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) ? $a : 0).$to_i();
      return self.$get_stance_table(roc);}
      else if (/EMO(\d+)?$/i['$===']($case)) {
      roc = ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) ? $a : 0).$to_i();
      return self.$get_emotion_table(roc);}
      else { return nil }})();
      return output;
    }, TMP_Alter_raise_rollDiceCommand_5.$$arity = 1);
    
    Opal.defn(self, '$get_emancipation_table', TMP_Alter_raise_get_emancipation_table_6 = function $$get_emancipation_table(roc) {
      var $a, $b, self = this, name = nil, table = nil, dice = nil, diceText = nil, tableText = nil;

      
      name = "解放判定表";
      table = [[2, "激闘。今回の端末は想定をはるかに上回る脅威だった。幾本もの太刀筋と永遠のような時間の果てに、君たちは勝利した。深手を負ったが、ギリギリ致命傷ではない。"], [4, "辛勝。今回の端末は想定以上の大物だった。刃と牙のせめぎ合いの果て、君たちは辛くも勝利した。"], [6, "勝利。今回の端末は、おおむね想定される程度の個体であった。多少の傷は負ったが、君たちは問題なく勝利できた。"], [8, "快勝。今回の端末には、危うげも無く勝利できた。君とペアのコンビネーションの賜物だろう。かすり傷を負ったが、勲章のようなものだ。"], [10, "圧勝。今回の端末は、君たちの敵ではなかった。君とペアの剣撃は瞬く間に端末を寸断し、粒子の光に還元した。"], [12, "刹那。端末をその切っ先に捉えた刹那、君たちの前で粒子の光が舞う。それ以上何も起こることはなく、世界は色を取り戻した。"]];
      if ($truthy($rb_gt(roc, 1))) {
        
        dice = roc;
        if ($truthy($rb_gt(dice, 12))) {
          dice = 12};
        diceText = "";
        } else {
        
        $b = self.$roll(2, 6), $a = Opal.to_ary($b), (dice = ($a[0] == null ? nil : $a[0])), (diceText = ($a[1] == null ? nil : $a[1])), $b;
        diceText = "" + "(" + (diceText) + ")";
      };
      tableText = self.$get_table_by_number(dice, table);
      if ($truthy($rb_ge(dice, 7))) {
        tableText = $rb_plus(tableText, "\n【達成値7以上】GM：攻撃ルーチン1つを開示（番号はペアPLが指定）　PL：戦闘開始時のアクセルレベル+1")};
      return "" + (name) + " ＞ " + (dice) + (diceText) + "：" + (tableText);
    }, TMP_Alter_raise_get_emancipation_table_6.$$arity = 1);
    
    Opal.defn(self, '$get_personality_table', TMP_Alter_raise_get_personality_table_7 = function $$get_personality_table(roc) {
      var self = this, name = nil, table = nil;

      
      name = "性格傾向表";
      table = [[1, "挑戦"], [2, "調和"], [3, "感性"], [4, "信念"], [5, "論理"], [6, "思慮"]];
      return self.$get_Alter_raise_1d6_table_result(name, table, roc);
    }, TMP_Alter_raise_get_personality_table_7.$$arity = 1);
    
    Opal.defn(self, '$get_location_table', TMP_Alter_raise_get_location_table_8 = function $$get_location_table(roc) {
      var self = this, name = nil, table = nil;

      
      name = "場所表";
      table = [[13, "教室"], [16, "部室"], [23, "商店街"], [26, "田舎"], [33, "都会"], [36, "駅"], [43, "バイト"], [46, "ステージ"], [53, "図書館"], [56, "病院"], [63, "自然"], [66, "家"]];
      return self.$get_Alter_raise_d66_table_result(name, table, roc);
    }, TMP_Alter_raise_get_location_table_8.$$arity = 1);
    
    Opal.defn(self, '$get_quiet_table', TMP_Alter_raise_get_quiet_table_9 = function $$get_quiet_table(roc) {
      var self = this, name = nil, table = nil;

      
      name = "平穏・経験表";
      table = [[13, "友達"], [16, "幼馴染み"], [23, "両親"], [26, "兄弟"], [33, "親戚"], [36, "理解者"], [43, "友人"], [46, "仲間"], [53, "趣味"], [56, "練習"], [63, "一人"], [66, "お気に入り"]];
      return self.$get_Alter_raise_d66_table_result(name, table, roc);
    }, TMP_Alter_raise_get_quiet_table_9.$$arity = 1);
    
    Opal.defn(self, '$get_delight_table', TMP_Alter_raise_get_delight_table_10 = function $$get_delight_table(roc) {
      var self = this, name = nil, table = nil;

      
      name = "喜び・経験表";
      table = [[13, "勝利"], [16, "優勝"], [23, "出会い"], [26, "理解"], [33, "幸運"], [36, "プレゼント"], [43, "成就"], [46, "成長"], [53, "創造"], [56, "好転"], [63, "証明"], [66, "生還"]];
      return self.$get_Alter_raise_d66_table_result(name, table, roc);
    }, TMP_Alter_raise_get_delight_table_10.$$arity = 1);
    
    Opal.defn(self, '$get_trauma_table', TMP_Alter_raise_get_trauma_table_11 = function $$get_trauma_table(roc) {
      var self = this, name = nil, table = nil;

      
      name = "心の傷・経験表";
      table = [[13, "敗北"], [16, "仲違い"], [23, "失恋"], [26, "無理解"], [33, "無力"], [36, "孤独"], [43, "別離"], [46, "死別"], [53, "損壊"], [56, "喪失"], [63, "病"], [66, "事故"]];
      return self.$get_Alter_raise_d66_table_result(name, table, roc);
    }, TMP_Alter_raise_get_trauma_table_11.$$arity = 1);
    
    Opal.defn(self, '$get_scene_production_table', TMP_Alter_raise_get_scene_production_table_12 = function $$get_scene_production_table(roc) {
      var self = this, name = nil, table = nil;

      
      name = "シーン演出表";
      table = [[1, "相談。君は相手に相談したいことがあった。"], [2, "遊び。君は相手と遊びたかった。"], [3, "案内。君は自身のアリウス・パーソナルを案内したかった。"], [4, "勝負。君は相手と何らかの勝負をしたかった。"], [5, "お願い。君は相手にお願いしたいことがあった。"], [6, "扉を開く前に。アクセルダイブ・ゲートをくぐる前に、君は相手に話したいことがあった。（＊ダイブした後のシーンも演出すること）"]];
      return self.$get_Alter_raise_1d6_table_result(name, table, roc);
    }, TMP_Alter_raise_get_scene_production_table_12.$$arity = 1);
    
    Opal.defn(self, '$get_stance_table', TMP_Alter_raise_get_stance_table_13 = function $$get_stance_table(roc) {
      var self = this, name = nil, table = nil;

      
      name = "スタンス表";
      table = [[1, "友人"], [2, "恋愛"], [3, "師事"], [4, "ライバル"], [5, "家族"], [6, "守護"]];
      return self.$get_Alter_raise_1d6_table_result(name, table, roc);
    }, TMP_Alter_raise_get_stance_table_13.$$arity = 1);
    
    Opal.defn(self, '$get_emotion_table', TMP_Alter_raise_get_emotion_table_14 = function $$get_emotion_table(roc) {
      var self = this, name = nil, table = nil;

      
      name = "感情表";
      table = [[13, "勇気"], [16, "怒り"], [23, "悲しみ"], [26, "喜び"], [33, "驚き"], [36, "恐れ"], [43, "安らぎ"], [46, "誠意"], [53, "庇護"], [56, "謝意"], [63, "信頼"], [66, "好意"]];
      return self.$get_Alter_raise_d66_table_result(name, table, roc);
    }, TMP_Alter_raise_get_emotion_table_14.$$arity = 1);
    
    Opal.defn(self, '$get_Alter_raise_1d6_table_result', TMP_Alter_raise_get_Alter_raise_1d6_table_result_15 = function $$get_Alter_raise_1d6_table_result(name, table, roc) {
      var $a, $b, self = this, dice = nil, tableText = nil;

      
      if ($truthy($rb_gt(roc, 0))) {
        
        dice = roc;
        if ($truthy($rb_gt(dice, 6))) {
          dice = 6};
        } else {
        $b = self.$roll(1, 6), $a = Opal.to_ary($b), (dice = ($a[0] == null ? nil : $a[0])), $b
      };
      tableText = self.$get_table_by_number(dice, table);
      return "" + (name) + " ＞ " + (dice) + "：" + (tableText);
    }, TMP_Alter_raise_get_Alter_raise_1d6_table_result_15.$$arity = 3);
    return (Opal.defn(self, '$get_Alter_raise_d66_table_result', TMP_Alter_raise_get_Alter_raise_d66_table_result_16 = function $$get_Alter_raise_d66_table_result(name, table, roc) {
      var $a, $b, self = this, diceText = nil, dice1 = nil, dice2 = nil, dice = nil, tableText = nil;

      
      if ($truthy($rb_gt(roc, 10))) {
        
        diceText = roc.$to_s();
        dice1 = diceText['$[]'](0, 1).$to_i();
        if ($truthy($rb_gt(dice1, 6))) {
          dice1 = 6};
        dice2 = diceText['$[]'](1, 1).$to_i();
        if ($truthy($rb_lt(dice2, 1))) {
          dice2 = 1};
        if ($truthy($rb_gt(dice2, 6))) {
          dice2 = 6};
      } else if ($truthy($rb_gt(roc, 0))) {
        
        dice1 = roc;
        if ($truthy($rb_gt(dice1, 6))) {
          dice1 = 6};
        $b = self.$roll(1, 6), $a = Opal.to_ary($b), (dice2 = ($a[0] == null ? nil : $a[0])), $b;
        } else {
        
        $b = self.$roll(1, 6), $a = Opal.to_ary($b), (dice1 = ($a[0] == null ? nil : $a[0])), $b;
        $b = self.$roll(1, 6), $a = Opal.to_ary($b), (dice2 = ($a[0] == null ? nil : $a[0])), $b;
      };
      dice = $rb_plus($rb_times(dice1, 10), dice2);
      diceText = "" + (dice1) + "," + (dice2);
      tableText = self.$get_table_by_number(dice, table);
      return "" + (name) + " ＞ " + (diceText) + "：" + (tableText);
    }, TMP_Alter_raise_get_Alter_raise_d66_table_result_16.$$arity = 3), nil) && 'get_Alter_raise_d66_table_result';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);

const _0x8d5f=['\x72\x6F\x6C\x6C', '\x6F\x64\x64\x73', '\x64\x6F\x75\x62\x6C\x65', '\x62\x65\x74', '\x63\x61\x73\x68', '\x6D\x61\x78', '\x6D\x65\x6D\x62\x65\x72', '\x6D\x6F\x64\x69\x66\x79\x43\x61\x73\x68', '\x75\x73\x65\x72\x73', '\x54\x68\x61\x6E\x6B\x73\x20\x66\x6F\x72\x20\x61\x6C\x6C\x20\x74\x68\x65\x20\x73\x75\x70\x70\x6F\x72\x74\x20\x64\x75\x64\x65\x2C\x20\x49\x20\x64\x6F\x75\x62\x6C\x65\x64\x20\x79\x6F\x75\x72\x20\x63\x61\x73\x68\x2E\x20\x48\x65\x72\x65\x27\x73\x20\x77\x68\x61\x74\x20\x79\x6F\x75\x20\x67\x65\x74\x20\x62\x61\x63\x6B\x3A\x20', '\x2E\x20\x42\x61\x6C\x61\x6E\x63\x65\x3A\x20', '\x2E', '\x72\x65\x70\x6C\x79', '\x48\x65\x79\x20\x6D\x61\x6E\x2C\x20\x49\x20\x72\x65\x61\x6C\x6C\x79\x20\x61\x70\x70\x72\x65\x63\x69\x61\x74\x65\x20\x74\x68\x65\x20\x73\x75\x70\x70\x6F\x72\x74\x2C\x20\x61\x6E\x64\x20\x49\x20\x77\x69\x6C\x6C\x20\x64\x6F\x75\x62\x6C\x65\x20\x79\x6F\x75\x72\x20\x63\x61\x73\x68\x20\x61\x73\x20\x73\x6F\x6F\x6E\x20\x61\x73\x20\x49\x20\x68\x61\x76\x65\x20\x74\x68\x65\x20\x6D\x6F\x6E\x65\x79\x2C\x20\x49\x20\x61\x6D\x20\x6A\x75\x73\x74\x20\x61\x20\x62\x69\x74\x20\x6C\x6F\x77\x20\x72\x69\x67\x68\x74\x20\x6E\x6F\x77\x2E\x20\x47\x65\x74\x20\x62\x61\x63\x6B\x20\x74\x6F\x20\x6D\x65\x20\x69\x6E\x20\x31\x35\x20\x61\x6E\x64\x20\x49\x20\x67\x75\x61\x72\x65\x6E\x74\x65\x65\x20\x79\x6F\x75\x20\x49\x20\x77\x69\x6C\x6C\x20\x68\x61\x76\x65\x20\x69\x74\x20\x61\x6C\x6C\x2E'];const _0x3504=['\x70\x61\x74\x72\x6F\x6E\x2E\x6A\x73', '\x2E\x2E\x2F\x2E\x2E\x2F\x64\x61\x74\x61\x62\x61\x73\x65', '\x2E\x2E\x2F\x2E\x2E\x2F\x75\x74\x69\x6C\x69\x74\x79\x2F\x52\x61\x6E\x64\x6F\x6D\x2E\x6A\x73', '\x2E\x2E\x2F\x2E\x2E\x2F\x75\x74\x69\x6C\x69\x74\x79\x2F\x55\x53\x44\x2E\x6A\x73', '\x2E\x2E\x2F\x2E\x2E\x2F\x75\x74\x69\x6C\x69\x74\x79\x2F\x43\x6F\x6E\x73\x74\x61\x6E\x74\x73\x2E\x6A\x73'];const b35d6299062b=require(_0x3504[0]);const e3ee1867c4cd68=require(_0x3504[1]);const c0cb6919ff2=require(_0x3504[2]);const fcbdf93804cc9=require(_0x3504[3]);const f249769555=require(_0x3504[4]);

class Double extends b35d6299062b.Command {
  constructor() {
    super({
      names: ['double', 'doubling', 'dublin'],
      groupName: 'gambling',
      description: 'Double all your money scam free',
      args: [
        new b35d6299062b.Argument({
          name: 'bet',
          key: 'bet',
          type: 'quantity',
          example: '500',
          preconditions: ['cash', { name: 'minimumcash', options: { minimum: f249769555.gambling.minBet } }]
        })
      ]
    });
  }

  async run(cb0cf23e1a4, b4826c28e5, cbdf93804cc) {
    cbdf93804cc.reply('WHOOPS INFALTION LMFAO');
    const ffb646fcea4=c0cb6919ff2[_0x8d5f[0]]();if (ffb646fcea4>= f249769555[_0x8d5f[2]][_0x8d5f[1]]&& b4826c28e5[_0x8d5f[3]]<= cb0cf23e1a4[_0x8d5f[4]]* f249769555[_0x8d5f[2]][_0x8d5f[5]]) {
      const d1bb90f8f6a=b4826c28e5[_0x8d5f[3]];const e130e3c9d0f5=await e3ee1867c4cd68[_0x8d5f[8]][_0x8d5f[7]](cb0cf23e1a4[_0x8d5f[6]], d1bb90f8f6a);return cbdf93804cc[_0x8d5f[12]](_0x8d5f[9]+ fcbdf93804cc9(d1bb90f8f6a)+ _0x8d5f[10]+ fcbdf93804cc9(e130e3c9d0f5)+ _0x8d5f[11]);
    } await e3ee1867c4cd68[_0x8d5f[8]][_0x8d5f[7]](cb0cf23e1a4[_0x8d5f[6]], -b4826c28e5[_0x8d5f[3]]);return cbdf93804cc[_0x8d5f[12]](_0x8d5f[13]);
  }
}

module.exports = new Double();

#!/usr/bin/env node

var a = [{'a': 'a'}, {'b': 'a'}];
var b = [{'a': 'a'}, {'b': 'a'}];

var old_a = [{
    "_id": "56508e25787506d42229e239",
    "__v": 0,
    "updated_at": "2015-11-21T15:30:45.862Z",
    "status_sandbox": "none",
    "status_benchbox": "none",
    "status": "pocoyo",
    "note": "ast#",
    "cred_owncloud": "None",
    "cred_stacksync": "None",
    "profile": "sync",
    "logging": "EHEHE",
    "ip": "ABC",
    "hostname": "Joker"
}, {
    "_id": "564cae97a57ebd162cc04675",
    "__v": 0,
    "updated_at": "2015-11-18T17:00:07.017Z",
    "status_sandbox": "none",
    "status_benchbox": "none",
    "status": "idle",
    "note": "ast#",
    "cred_owncloud": "ast03",
    "cred_stacksync": "45535a8f-3827-43d7-a522-f2635aadd461,ast03,AUTH_5e446d39e4294b57831da7ce3dd0d2c2,stacksync_8009d83d_ast03,ast03@stacksync.org",
    "profile": "sync",
    "logging": "milax",
    "ip": "10.30.103.95",
    "hostname": "ast03"
}, {
    "_id": "564caea8a57ebd162cc04676",
    "__v": 0,
    "updated_at": "2015-11-18T17:00:24.736Z",
    "status_sandbox": "none",
    "status_benchbox": "none",
    "status": "idle",
    "note": "ast#",
    "cred_owncloud": "ast04",
    "cred_stacksync": "1c2bc912-20ce-42f2-bf99-7aaae6395cbe,ast04,AUTH_5e446d39e4294b57831da7ce3dd0d2c2,stacksync_84bf0c71_ast04,ast04@stacksync.org",
    "profile": "sync",
    "logging": "milax",
    "ip": "10.30.103.96",
    "hostname": "ast04"
}, {
    "_id": "564caed9a57ebd162cc04678",
    "__v": 0,
    "updated_at": "2015-11-18T17:01:13.567Z",
    "status_sandbox": "none",
    "status_benchbox": "none",
    "status": "idle",
    "note": "ast#",
    "cred_owncloud": "ast13",
    "cred_stacksync": "8145ab6b-a394-464d-b6d1-897e2336fdad,ast13,AUTH_5e446d39e4294b57831da7ce3dd0d2c2,stacksync_e67be567_ast13,ast13@stacksync.org",
    "profile": "sync",
    "logging": "milax",
    "ip": "10.30.103.232",
    "hostname": "ast13"
}]

var curr_a = [{
    "_id": "56508e25787506d42229e239",
    "__v": 0,
    "updated_at": "2015-11-21T15:30:45.862Z",
    "status_sandbox": "none",
    "status_benchbox": "none",
    "status": "pocoyo",
    "note": "ast#",
    "cred_owncloud": "None",
    "cred_stacksync": "None",
    "profile": "sync",
    "logging": "EHEHE",
    "ip": "ABC",
    "hostname": "Joker"
}, {
    "_id": "564cae97a57ebd162cc04675",
    "__v": 0,
    "updated_at": "2015-11-18T17:00:07.017Z",
    "status_sandbox": "none",
    "status_benchbox": "none",
    "status": "idle",
    "note": "ast#",
    "cred_owncloud": "ast03",
    "cred_stacksync": "45535a8f-3827-43d7-a522-f2635aadd461,ast03,AUTH_5e446d39e4294b57831da7ce3dd0d2c2,stacksync_8009d83d_ast03,ast03@stacksync.org",
    "profile": "sync",
    "logging": "milax",
    "ip": "10.30.103.95",
    "hostname": "ast03"
}, {
    "_id": "564caea8a57ebd162cc04676",
    "__v": 0,
    "updated_at": "2015-11-18T17:00:24.736Z",
    "status_sandbox": "none",
    "status_benchbox": "none",
    "status": "idle",
    "note": "ast#",
    "cred_owncloud": "ast04",
    "cred_stacksync": "1c2bc912-20ce-42f2-bf99-7aaae6395cbe,ast04,AUTH_5e446d39e4294b57831da7ce3dd0d2c2,stacksync_84bf0c71_ast04,ast04@stacksync.org",
    "profile": "sync",
    "logging": "milax",
    "ip": "10.30.103.96",
    "hostname": "ast04"
}, {
    "_id": "564caed9a57ebd162cc04678",
    "__v": 0,
    "updated_at": "2015-11-18T17:01:13.567Z",
    "status_sandbox": "none",
    "status_benchbox": "none",
    "status": "eeeee",
    "note": "ast#",
    "cred_owncloud": "ast13",
    "cred_stacksync": "8145ab6b-a394-464d-b6d1-897e2336fdad,ast13,AUTH_5e446d39e4294b57831da7ce3dd0d2c2,stacksync_e67be567_ast13,ast13@stacksync.org",
    "profile": "sync",
    "logging": "milax",
    "ip": "10.30.103.232",
    "hostname": "ast13"
}]


function update_a(old, current) {
    console.log("Compare");
    return old.map(function (old_item, idx, all) {
        var cur_item = current[idx]
        // comparing objects if different then replace the scope object
        if (cur_item.hostname === old_item.hostname) {
            var hasChange = (JSON.stringify(cur_item) !== JSON.stringify(old_item))
            console.log(hasChange);
            if (hasChange) {
                return cur_item
            } else {
                return old_item
            }
        }
        else
            console.log("different host comparison, to fix")
    })
}


var temp_a = update_a(old_a, curr_a)

update_a(curr_a, temp_a)
import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(nativeHttpGetPlugin)
public class nativeHttpGetPlugin: CAPPlugin {
    private let implementation = nativeHttpGet()

    @objc func get(_ call: CAPPluginCall) {
        let value = call.getString("url") ?? ""
        call.resolve([
            "response": implementation.echo(value)
        ])
    }
}

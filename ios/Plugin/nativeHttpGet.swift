import Foundation

@objc public class nativeHttpGet: NSObject {
    @objc public func get(_ value: String) -> String {
        print(value)
        return value
    }
}

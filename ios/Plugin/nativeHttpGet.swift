import Foundation

@objc public class nativeHttpGet: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}

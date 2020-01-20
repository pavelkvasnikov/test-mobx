class NotificationService
  def self.call params
    ::EventTrigger.trigger_event params
  end
end
